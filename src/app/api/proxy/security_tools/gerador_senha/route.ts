import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
    
        try {
            const data = await request.json();

            const { tamanho_minimo, tamanho_maximo, maiusculas, minusculas, digitos, caracteres_especiais } = data;

            if (typeof Number(tamanho_minimo) !== 'number' ||
                typeof Number(tamanho_maximo) !== 'number' ||
                typeof maiusculas !== 'boolean' ||
                typeof minusculas !== 'boolean' ||
                typeof digitos !== 'boolean' ||
                typeof caracteres_especiais !== 'boolean') {
                return NextResponse.json({ isValid: false, error: 'Formato de dados inválido' });
            }

            if (Number(tamanho_minimo) < 0 || Number(tamanho_maximo) < 0 || Number(tamanho_minimo) > Number(tamanho_maximo)) {
                return NextResponse.json({ isValid: false, error: 'Valores de comprimento de senha inválidos' });
            }

            if (!data) {
                return NextResponse.json({ error: 'Nenhuma informação foi passada!.' }, { status: 400 });
            }

            const flaskResponse = await axios.post(
                `${process.env.NEXT_PUBLIC_FLASKAPI_URL}/api/gerador_senha`,
                data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );

            return NextResponse.json(flaskResponse.data, { status: flaskResponse.status });

        } catch (error: any) {
            console.error('Error forwarding to Flask API:', error);
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
        }
    } 

