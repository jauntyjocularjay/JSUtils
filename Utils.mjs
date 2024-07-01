
class JSUtil {

    static ObjToString(object){
        let result = ''
        result = '{\n'
        for(const [key, value] of Object.entries(object)){
            result += `    ${key}: ${value},\n`
        }
        result += '}\n'
        return result
    }

    static LogObject(object, alias=null){
        alias
            ? alias = alias
            : alias = typeof object
        console.log(`${alias} + ${JSUtil.ObjToString(object)}`)
    }

}

