import $ from 'jquery';

export const request = (step, data) => {
    
    const url = `https://***/${step}`    
    console.log(url, data); 
    
    const query = {        
          "url": url,
          "method": "POST",
          "data": data
        }
        
    return $.ajax(query).done(data => {              
        return data        
    });
}
