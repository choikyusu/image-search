import { useSearchState } from '../provider/SearchProvider';

export default function useButton(params: { id: OrderType }) {
  const { id } = params;
  const { order, setOrder, setPage } = useSearchState();

  function handleClickItem(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    const type = target.id as OrderType;
    setOrder(type);
    setPage(1);
  }

  function isSelectedButton() {
    return order === id;
  }

  return { handleClickItem, isSelected: isSelectedButton() };
}
