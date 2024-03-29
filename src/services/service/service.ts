import instance from './instance';
import {
  type CreateUser,
  getKeyByPropertyOfUser,
  type LoginUser,
  type ResponseCreateUser,
  type UpdatePropertyOfUser,
} from '../../typings/CreateUser';
import type {ResponseProduct} from '../../typings/Product';

const Service = {
  createUser: async (user: CreateUser) => {
    try {
      const res = await instance.post<ResponseCreateUser>('user', user);

      return res.data;
    } catch (e) {
      throw new Error(e?.response?.data?.error || 'Server error');
    }
  },
  login: async (user: LoginUser) => {
    try {
      const res = await instance.post<ResponseCreateUser>('login', user);

      return res.data;
    } catch (e) {
      console.log(e);

      throw new Error(e?.response?.data?.error || 'Server error');
    }
  },

  refresh: async (id: string) => {
    try {
      const res = await instance.get<{
        ok: ResponseCreateUser['userProfile'];
      }>('user/' + id);

      console.log('refresh', res);

      return res.data.ok;
    } catch (e) {
      throw new Error(e?.response?.data?.error || 'Server error');
    }
  },

  completeOnboarding: async (id: string) => {
    try {
      console.log('completeOnboarding');

      const res = await instance.put(`user/${id}/complete_onboarding`);
      console.log('completeOnboarding', res);

      return res.data;
    } catch (e) {
      console.log(e);

      throw new Error(e?.response?.data?.error || 'Server error');
    }
  },

  updatePropertyOfUser: async (
    idUser: string,
    {type, value}: UpdatePropertyOfUser,
  ) => {
    const key = getKeyByPropertyOfUser(type);

    try {
      const res = await instance.put<{
        ok: string;
      }>(`user/${idUser}/${type}`, {
        [key]: value,
      });

      console.log(res);

      return res.data.ok;
    } catch (e) {
      console.log(e);

      throw new Error(e?.response?.data?.error || 'Server error');
    }
  },

  getProducts: async (type: TypeProduct) => {
    try {
      const res = await instance.get<ResponseProduct[]>(
        'product?productType=' + type,
      );

      console.log(res);

      return res.data;
    } catch (e) {
      console.log(e);

      throw new Error(e?.response?.data?.error || 'Server error');
    }
  },
  forgotpassword: async (email: string) => {
    try {
      const res = await instance.post('auth/forgotpassword', {
        email,
      });

      console.log('res', res);

      return res.data.ok;
    } catch (e) {
      console.log(e);

      throw new Error(e?.response?.data?.error || 'Server error');
    }
  },
  resetpassword: async (data: {
    token: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      const res = await instance.patch('auth/resetpassword/', {
        password: data.password,
        confirmPassword: data.confirmPassword,
        passwordResetToken: data.token,
      });

      console.log(res);

      return res.data;
    } catch (e) {
      console.log(e);

      throw new Error(e?.response?.data?.error || 'Server error');
    }
  },
};

type TypeProduct =
  | 'foundation'
  | 'lipstick'
  | 'mascara'
  | 'blush'
  | 'bronzer'
  | 'eyebrow'
  | 'eyeliner'
  | 'eyeshadow'
  | 'lip_liner'
  | 'nail_polish';
export default Service;
