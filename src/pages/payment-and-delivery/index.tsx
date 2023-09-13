import { Header } from '@/components/Header';
import { Footer } from '@/components/footer';
import { PaymentAndDelivery } from '../../components/PaymentAndDelivery';
import { copyRightList, footerNavData } from '../../footerData';

const PaymentAndDeliveryPage = () => {
  return (
    <>
      <Header />
      <PaymentAndDelivery />
      <Footer footerNavData={footerNavData} copyRightList={copyRightList} />
    </>
  );
};
export default PaymentAndDeliveryPage;
