import { SetMetadata } from '@nestjs/common';

export const jwtConstants = {
  secret: '4429e74b39cbdafaeb992e3c48430c693af8f186', // TODO: Tirar e usar como .env antes de subir
};

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
