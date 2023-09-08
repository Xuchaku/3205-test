declare global {
  declare module "express-serve-static-core" {
    interface Request {
      fields: {
        email: string;
        number?: string;
      };
    }
    interface Response {
      fields: {
        email: string;
        number?: string;
      };
    }
  }
}
