import { useSearchState } from '../provider/SearchProvider';

export default function useButton(params: { id: OrderType }) {
  const { id } = params;
  const { order, setOrder } = useSearchState();
  function handleClickItem(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    const type = target.id as OrderType;
    setOrder(type);
  }

  return { handleClickItem, isSelected: order === id };
}
