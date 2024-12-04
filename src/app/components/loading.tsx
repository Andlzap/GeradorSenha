
import Image from 'next/image'


export default function loading() {
    return (
        <div className="load OpenSans w-full">
            <div className='flex flex-col justify-center items-center text-center mt-24'>
                <Image
                    src="/Media/logoTeste2.svg"
                    width={170}
                    height={170}
                    alt=""
                    style={{ marginTop: '130px' }}
                    className='flex'
                />{''}
                <h1 className='p-4' style={{ fontSize: '50px' }}>O-Synthesis</h1>
                <div className="animate-spin rounded-full h-8 w-8 border-t-3 border-b-2 border-gray-200"></div>
            </div>
        </div>
    )
}
