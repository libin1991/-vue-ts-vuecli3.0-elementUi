import Http from '@/views/aixo/http';

/**
 * 登陆的接口
 * @param res 参数
 */
export const sysUserLogin = (res: any) => {
    return Http({
        url: '/manage/sysUser/login',
        method: 'post',
        params: res,
    });
};
