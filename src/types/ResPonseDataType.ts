type ResPonseDataType<D = null> =
  | {
      success: true;
      result: D;
      error: null;
    }
  | {
      success: false;
      result: null;
      error: {
        message: string;
      };
    };

export default ResPonseDataType;
