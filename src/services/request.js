import $ from 'jquery';

export const request = (step, data) => {
    
    const url = `api/${step}`        
    
    const query = {        
          "url": url,
          "method": "POST",
          "data": data
        }
        
    return $.ajax(query).done(data => {              
        return data        
    });
}
