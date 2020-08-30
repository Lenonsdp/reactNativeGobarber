import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '../../../services/api';
import { updateProfileSuccess, updateProfilefailure } from './actions';

export function* updateProfile({ payload }) {
    try {
        const { name, email, ...rest } = payload.data;

        const profile = Object.assign(
            { name, email },
            rest.oldPassword ? rest : {}
        );

        const response = yield call(api.put, 'users', profile);
        Alert.alert('Sucesso', 'Usuario atualizado com sucesso');

        yield put(updateProfileSuccess(response.data));
    } catch (error) {
        Alert.alert('Falaha', 'Usuário não atualizado, verifique seus dados e tente novemente');
        yield put(updateProfilefailure());
    }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
