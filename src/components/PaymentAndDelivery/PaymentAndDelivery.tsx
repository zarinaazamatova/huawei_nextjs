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
  StyledHeader,
} from './PaymentAndDelivery.styles';
import { PaymentOption, PaymentImage } from './PaymentAndDelivery.types';
import { paymentOptionsList } from './PaymentAndDelivery.constants';
import { DeliveryOptions } from './components/DeliveryOptions';

const renderImages = (arr: PaymentImage[]) => {
  return arr.map(({ imgData, alt }) => {
    const { src, width, height } = imgData;
    return <Image src={src} alt={alt} width={width} height={height} />;
  });
};

export const PaymentAndDelivery = (): JSX.Element => {
  return (
    <StyledPaymentAndDeliveryContainer>
      <StyledHeader>Доставка и оплата</StyledHeader>
      <StyledMapContainer>
        <h3>Введите адрес или укажите его на карте</h3>
        <div>Google map component from Jyldyz</div>
        <hr />
      </StyledMapContainer>
      <DeliveryOptions />
      <StyledOptionsContainer>
        <h3>Способы оплаты</h3>
        <StyledPaymentOptionsList>
          {paymentOptionsList.map(({ title, info, images, url }: PaymentOption, index) => {
            return (
              <StyledPaymentRow key={index}>
                <StyledPaymentTitle>{title}</StyledPaymentTitle>
                <StyledPaymentInfo>
                  {info}
                  <div>{images && renderImages(images)}</div>
                  <div>{url && <Link href={url.link}>{url.title}</Link>}</div>
                </StyledPaymentInfo>
              </StyledPaymentRow>
            );
          })}
        </StyledPaymentOptionsList>
      </StyledOptionsContainer>
      <StyledReturnOptionsContainer>
        <StyledHeader>Условия возврата</StyledHeader>
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
