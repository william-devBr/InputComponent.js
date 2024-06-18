const InputComponent = ($, props) =>{
 
    let input = document.createElement('input')
      
        Object.assign(input, {
            'type' : props.type || 'text',
            'value': props.value || '',
            'className': props.class || '',
            'name': props.name || '',
            'id': props.id || ''
        });

    return   $.appendChild(input);

}

export default InputComponent;