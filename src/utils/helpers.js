export const text_truncate = (input) => input?.length >= 28 ? `${input.substring(0, 28)}...` : input;


export const isValidHttpUrl = (string) => {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  }