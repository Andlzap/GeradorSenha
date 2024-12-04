"use client"
import imports from '@/app/components/importsPadrao';
import { SubmitHandler } from 'react-hook-form';

type DatasInput = {
    senha: string,
    maiusculas: boolean,
    minusculas: boolean,
    digitos: boolean,
    caracteres_especiais: boolean,
    tamanho_maximo: number,
    tamanho_minimo: number
}

type Dados = {
    password: string,
}

export default function GeradorSenha() {
    const { React, useEffect, motion, useForm, axios, useState, useCallback, LoadingLogado, BackgroundVideo} = imports;
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<DatasInput>();
    const [credenciaisErradas, setCredenciaisErradas] = useState(0);
    const [showLoading, setShowLoading] = useState(false);
    const [showMessage, setShowMessage] = useState('')

    const onSubmit: SubmitHandler<DatasInput> = useCallback(async (datas) => {
        try {
            setShowLoading(true);
            const max = parseInt(datas.tamanho_maximo.toString());
            const min = parseInt(datas.tamanho_minimo.toString());

            if (max < min) {
                setShowMessage("O tamanho máximo não pode ser menor que o tamanho mínimo");
                return;
            } else {
                setShowMessage("");
            }

            const data = {
                tamanho_minimo: datas.tamanho_minimo,
                tamanho_maximo: datas.tamanho_maximo,
                maiusculas: datas.maiusculas,
                minusculas: datas.minusculas,
                digitos: datas.digitos,
                caracteres_especiais: datas.caracteres_especiais
            };
            
           
            const response = await axios.post(
                '/api/proxy/security_tools/gerador_senha',
                data
            );

            const responseData = await response.data;
            setValue("senha", responseData.message);

        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setShowLoading(false);
        }
    }, [axios, setValue]);

    return (
        <>
        <div id='bgLogado'>
            <div className='textoInicio animate-appearFromDepth'>
                <div className='flex flex-col lg:gap-24 gap-14 p-5'>
                    <div>
                        <h1 className='OpenSans font-semibold text-4xl lg:mb-5'>Gerador de senha</h1>
                        <p>Gere uma senha forte e segura com as suas preferências!! </p>
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-4 justify-center'>

                    <div className='lg:col-span-2 card-back flex flex-col justify-center items-center text-white p-5 rounded w-full gap-7'>

                        <h1 className='text-xl mt-5'>Defina suas preferências</h1>
                        <small style={{ color: 'rgb(170, 13, 13)', fontWeight: 'bold' }}>Selecione pelo menos uma das opções abaixo!!!</small>

                        <div className="grid lg:grid-cols-4 grid-cols-1 lg:justify-items-center gap-4">
                            <div>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type='checkbox'
                                        id='maiuscula'
                                        className="peer hidden"
                                        {...register("maiusculas", { required: false })}
                                    />
                                    <span className="flex items-center justify-center h-5 w-5 border-2 border-white rounded-full bg-transparent peer-checked:bg-white peer-checked:border-transparent transition duration-200 cursor-pointer"></span>
                                    <span className="text-white">Maiuscula</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type='checkbox'
                                        id='minuscula'
                                        className="peer hidden"
                                        {...register("minusculas", { required: false })}
                                    />
                                    <span className="flex items-center justify-center h-5 w-5 border-2 border-white rounded-full bg-transparent peer-checked:bg-white peer-checked:border-transparent transition duration-200 cursor-pointer"></span>
                                    <span className="text-white">Minuscula</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type='checkbox'
                                        id='digitos'
                                        className="peer hidden"
                                        {...register("digitos", { required: false })}
                                    />
                                    <span className="flex items-center justify-center h-5 w-5 border-2 border-white rounded-full bg-transparent peer-checked:bg-white peer-checked:border-transparent transition duration-200 cursor-pointer"></span>
                                    <span className="text-white">Digitos</span>
                                </label>
                            </div>

                            <div>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type='checkbox'
                                        id='caracteres_especiais'
                                        className="peer hidden"
                                        {...register("caracteres_especiais", { required: false })}
                                    />
                                    <span className="flex items-center justify-center h-5 w-5 border-2 border-white rounded-full bg-transparent peer-checked:bg-white peer-checked:border-transparent transition duration-200 cursor-pointer"></span>
                                    <span className="text-white">Caracteres Especiais</span>
                                </label>
                            </div>
                        </div>

                        <div className='flex lg:flex-row flex-col justify-center items-center w-full gap-5'>
                            <div className='flex w-44'>
                                <input
                                    type='number'
                                    max={15}
                                    min={0}
                                    placeholder='Tamanho Mínimo'
                                    className={(credenciaisErradas === 1 && "border-danger p-2 w-full") || (errors?.tamanho_minimo && "border-danger p-2 w-full") || "p-2 border border-white w-full"}
                                    {...register("tamanho_minimo", {
                                        required: true,
                                        min: {
                                            value: 0,
                                            message: "O valor deve ser no mínimo 0"
                                        },
                                        max: {
                                            value: 15,
                                            message: "O valor deve ser no máximo 15"
                                        },
                                        validate: value => Number.isInteger(Number(value)) || "O valor deve ser um número inteiro"
                                    })}
                                />
                            </div>
                            <div className='flex w-44'>
                                <input
                                    type='number'
                                    max={15}
                                    min={0}
                                    placeholder='Tamanho Máximo'
                                    className={(credenciaisErradas === 1 && "border-danger p-2 w-full") || (errors?.tamanho_maximo && "border-danger p-2 w-full") || "p-2 border border-white w-full"}
                                    {...register("tamanho_maximo", {
                                        required: true,
                                        min: {
                                            value: 0,
                                            message: "O valor deve ser no mínimo 0"
                                        },
                                        max: {
                                            value: 15,
                                            message: "O valor deve ser no máximo 15"
                                        },
                                        validate: value => Number.isInteger(Number(value)) || "O valor deve ser um número inteiro"
                                    })}
                                />
                            </div >
                        </div>

                        <div className='flex flex-col gap-4 justify-center text-center'>
                            {(errors.tamanho_minimo || errors.tamanho_maximo) &&
                                <p className="text-danger fw-bold">{errors?.tamanho_minimo?.message || errors?.tamanho_maximo?.message}</p>}

                            {(errors.tamanho_minimo?.type === 'required' || errors.tamanho_maximo?.type === 'required') &&
                                <p className="text-red-500 font-semibold">Os campos de tamanho são obrigatório</p>}
                            {showMessage !== '' && <p className="text-red-500 font-semibold">{showMessage}</p>}
                        </div>

                        <div className="flex justify-center lg:my-5">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="botaoModal Anta"
                                onClick={() => handleSubmit(onSubmit)()}
                            >
                                Gerar
                            </motion.button>
                        </div>

                        <div className='border border-gray-600 w-full'></div>

                        <div className='flex flex-col gap-5 justify-center items-center my-5'>
                            <h1 className='text-xl'>Sua senha gerada</h1>
                            <input
                                type="text"
                                id="senha"
                                placeholder="Senha Gerada"
                                {...register("senha", { required: false })}
                                className='p-2 border border-white w-72'
                                name='senha'
                                readOnly
                            />
                        </div>
                    </div>

                </div>
            </div>
            {showLoading === true && <LoadingLogado />
            }
            </div>
        </>
    )
}