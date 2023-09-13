export type PaymentImage = {
  imgData: {
    src: string;
    width: number;
    height: number;
  };
  alt: string;
};

export type PaymentUrl = {
  title: string;
  link: string;
};

export type PaymentOption = {
  title: string;
  info: string;
  images?: PaymentImage[];
  url?: PaymentUrl;
};
export type DeliveryOption = {
  type: string;
  description: {
    price: string | number;
    options: string[];
  };
  delivery: string;
  deliveryDays: string;
  deliveryTime: string[];
  assortment: string;
};
