export function slugify(text: string): string {
    return text
      .toString() 
      .toLowerCase() 
      .normalize('NFD') 
      .replace(/[\u0300-\u036f]/g, '') 
      .replace(/\s+/g, '-') 
      .replace(/[^\w\-]+/g, '') 
      .replace(/--+/g, '-') 
      .trim(); 
  }