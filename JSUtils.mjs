
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
        let result
        alias
            ? alias = alias
            : alias = typeof object
        result = `${alias} ${JSUtil.ObjToString(object)}`
        return result
    }

}

export { JSUtil }
