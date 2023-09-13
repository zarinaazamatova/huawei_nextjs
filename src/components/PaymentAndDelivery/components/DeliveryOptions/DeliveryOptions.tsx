import Link from 'next/link';
import {
  StyledHeader,
  StyledTable,
  StyledTableRow,
  StyledTableHead,
  StyledTableDataTitle,
  StyledTableData,
} from './DeliveryOptions.styles';
import { deliveryOptions } from '../../PaymentAndDelivery.constants';
import { DeliveryOption } from '../../PaymentAndDelivery.types';

const checkOptions = (arr: string[]) => {
  return arr.map((item: string) => {
    const isLink = item === 'Найти ближайший';
    return <div>{isLink ? <Link href="/">{item}</Link> : item}</div>;
  });
};

export const DeliveryOptions = () => {
  return (
    <div>
      <StyledHeader>Условия доставки</StyledHeader>
      <StyledTable>
        <thead>
          <StyledTableRow>
            <StyledTableHead>Тип доставки</StyledTableHead>
            <StyledTableHead>Стоимость</StyledTableHead>
            <StyledTableHead>Получение</StyledTableHead>
            <StyledTableHead>Дни доставки</StyledTableHead>
            <StyledTableHead>Время доставки</StyledTableHead>
            <StyledTableHead>Ассортимент</StyledTableHead>
          </StyledTableRow>
        </thead>
        <tbody>
          {deliveryOptions.map(
            ({
              type,
              description,
              delivery,
              deliveryDays,
              deliveryTime,
              assortment,
            }: DeliveryOption) => {
              return (
                <StyledTableRow>
                  <StyledTableDataTitle>{type}</StyledTableDataTitle>
                  <StyledTableData>
                    {description.price} {typeof description.price === 'number' && '₽'}
                    {checkOptions(description.options)}
                  </StyledTableData>
                  <StyledTableData>{delivery}</StyledTableData>
                  <StyledTableData>{deliveryDays}</StyledTableData>

                  <StyledTableData>
                    {deliveryTime.map((item) => {
                      const isLast = item === deliveryTime.at(-1);
                      return (
                        <span>
                          {item}
                          {!isLast && ','}
                        </span>
                      );
                    })}
                  </StyledTableData>
                  <StyledTableData>{assortment}</StyledTableData>
                </StyledTableRow>
              );
            },
          )}
        </tbody>
      </StyledTable>
      <p>
        При доставке на закрытую территорию, необходимо заранее оформить пропуск, разрешающий въезд
        транспортного средства. При отсутствии пропуска для въезда на закрытую территорию — доставка
        будет осуществляться до КПП/шлагбаума (или иного ограничителя).
      </p>
    </div>
  );
};
