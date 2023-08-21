import Link from 'next/link';
import Image from 'next/image';
import {
  StyledPaymentAndDeliveryContainer,
  StyledPaymentOptionsList,
  StyledPaymentRow,
  StyledPaymentTitle,
  StyledPaymentInfo,
  StyledReturnOptionsContainer,
  StyledDeliveryContainer,
  StyledOptionsContainer,
} from './PaymentAndDelivery.styles';

import { Delivery } from './components/Delivery';
import { paymentOptionsList } from './PaymentOptionsList';

export const PaymentAndDelivery = (): JSX.Element => {
  return (
    <StyledPaymentAndDeliveryContainer>
      <h1>Доставка и оплата</h1>
      <StyledDeliveryContainer>
        <h3>Введите адрес или укажите его на карте</h3>
        <div>Google map component from Jyldyz</div>
        <Delivery />
      </StyledDeliveryContainer>

      <StyledOptionsContainer>
        <h3>Способы оплаты</h3>
        <StyledPaymentOptionsList>
          {paymentOptionsList.map(({ title, info, images, url }, index) => {
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
