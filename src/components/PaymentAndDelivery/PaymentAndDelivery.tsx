import Link from 'next/link';
import Image from 'next/image';

import {
  StyledPaymentAndDeliveryContainer,
  StyledPaymentOptionsList,
  StyledPaymentRow,
  StyledPaymentTitle,
  StyledPaymentInfo,
  StyledReturnOptionsContainer,
  StyledMapContainer,
  StyledOptionsContainer,
  StyledDeliveryGrid,
  StyledGridRow,
  StyledGridRowTitle,
  StyledGridRowPrice,
  StyledGridRowTime,
} from './PaymentAndDelivery.styles';

import { PaymentOption, DeliveryOption } from './PaymentAndDelivery.types';

import { paymentOptionsList, deliveryOptions } from '../../PaymentAndDeliveryData';

export const PaymentAndDelivery = (): JSX.Element => {
  return (
    <StyledPaymentAndDeliveryContainer>
      <h1>Доставка и оплата</h1>
      <StyledMapContainer>
        <h3>Введите адрес или укажите его на карте</h3>
        <div>Google map component from Jyldyz</div>
        <h1>Условия доставки</h1>
        <p>Условия доставки отобразятся после уточнения адреса.</p>
        <hr />
      </StyledMapContainer>
      <div>
        <h1>Условия доставки</h1>
        <StyledDeliveryGrid>
          <StyledGridRow>
            <p>Тип доставки</p>
            <p>Стоимость</p>
            <p>Получение</p>
            <p>Дни доставки</p>
            <p>Время доставки</p>
            <p>Ассортимент</p>
          </StyledGridRow>
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
                <StyledGridRow>
                  <StyledGridRowTitle>{type}</StyledGridRowTitle>
                  <StyledGridRowPrice>
                    <div>
                      {description.price} {typeof description.price === 'number' && '₽'}
                    </div>
                    {description.options.map((item) => {
                      const isLink = item === 'Найти ближайший';
                      return <div>{isLink ? <Link href="/">{item}</Link> : item}</div>;
                    })}
                  </StyledGridRowPrice>
                  <div>{delivery}</div>
                  <div>{deliveryDays}</div>
                  <StyledGridRowTime>
                    {deliveryTime.map((item, index) => {
                      const isLast = index === deliveryTime.length - 1;
                      return (
                        <span>
                          {item}
                          {!isLast && ','}
                        </span>
                      );
                    })}
                  </StyledGridRowTime>
                  <div>{assortment}</div>
                </StyledGridRow>
              );
            },
          )}
        </StyledDeliveryGrid>
        <p>
          При доставке на закрытую территорию, необходимо заранее оформить пропуск, разрешающий
          въезд транспортного средства. При отсутствии пропуска для въезда на закрытую территорию —
          доставка будет осуществляться до КПП/шлагбаума (или иного ограничителя).
        </p>
      </div>
      <StyledOptionsContainer>
        <h3>Способы оплаты</h3>
        <StyledPaymentOptionsList>
          {paymentOptionsList.map(({ title, info, images, url }: PaymentOption, index) => {
            return (
              <StyledPaymentRow key={index}>
                <StyledPaymentTitle>{title}</StyledPaymentTitle>
                <StyledPaymentInfo>
                  {info}
                  <div>
                    {images &&
                      images.map(({ imgData, alt }) => {
                        const { src, width, height } = imgData;
                        return <Image src={src} alt={alt} width={width} height={height} />;
                      })}
                  </div>
                  <div>{url && <Link href={url.link}>{url.title}</Link>}</div>
                </StyledPaymentInfo>
              </StyledPaymentRow>
            );
          })}
        </StyledPaymentOptionsList>
      </StyledOptionsContainer>
      <StyledReturnOptionsContainer>
        <h1>Условия возврата</h1>
        <p>
          В случае, если вдруг вы решите вернуть уже оплаченный товар, вы можете позвонить в наш
          контакт-центр по телефону +7 495 221-72-26
        </p>
        <p>
          Срок возврата товара надлежащего качества составляет 30 дней с момента получения товара.
        </p>
        <p>
          Возврат переведенных средств, производится на Ваш банковский счет в течение 5—30 рабочих
          дней (срок зависит от Банка, который выдал Вашу банковскую карту).
        </p>
        <p>
          Более подробную информацию об условиях возврата и обмена вы можете получить на странице{' '}
          <Link href="/">Возврат и обмен</Link>
        </p>
      </StyledReturnOptionsContainer>
    </StyledPaymentAndDeliveryContainer>
  );
};
