import { createStore } from 'redux'
//引入规则文件
import rootReducer from '../reducers/index.js'
export default function configStore(initState){
    // 创建store
    const store = createStore(
        rootReducer,
        initState,
        // 如果安装了redux插件可按照版本打开下面的注释
        // window.devToolsExtension ? window.devToolsExtension() : undefined
        // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined
    )
    return store
}