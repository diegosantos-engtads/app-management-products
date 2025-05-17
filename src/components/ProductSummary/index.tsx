type ProductSummaryProps = {
  name: string;
  price: number;
  category: string;
  description: string;
  className?: string;
};

export async function ProductSummary({
  name,
  price,
  category,
  description,
}: ProductSummaryProps) {
  return (
    <div className='h-45 sm:h-50 flex flex-col justify-between p-2 rounded'>
      <h2 className='text-[12px] text-start truncate-description'>{name}</h2>

      <p className='text-[#656565] py-2'>{category}</p>

      <p className='font-medium py-2'>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price)}
      </p>

      <p className=' truncate-description'>
        {description}
        <span className='ver-mais'></span>
      </p>
      <p className='text-[#262694]'>Saiba Mais</p>
    </div>
  );
}
