export class Customer {
  guid: string;
  last_name: string;
  first_name: string;
  middle_name: string;
  email: string;
  school_code;
}

export class CustomerRsp {
  data: Customer
}
