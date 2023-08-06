import { IRootReduxStateRTK } from '../RTK';

type ISelectorParamState<T> = [(state: IRootReduxStateRTK) => T];
type ISelectorParam2<T1, T2> = [...ISelectorParamState<T1>, (_: IRootReduxStateRTK, id: T2) => T2];
