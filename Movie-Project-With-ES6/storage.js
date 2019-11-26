class Storage{

    static addFilmToStorage(newFilm) {
    
        let films=this.getFilmsFromStorage();
    
        films.push(newFilm); // Array'e newFilm ekleme
    
        localStorage.setItem("films",JSON.stringify(films));
        // Bu array localstorage yazdık. key'e films dedik. Ama şimdide array'i string 'e çevirmemiz gerekiyor. Çünkü localstorage sadece string kabul ediyor.
    
    }
    
    static getFilmsFromStorage(){
        let films;
        if(localStorage.getItem("films")===null){ // films isminde herhangi bir key var mı ?
            films = [];
        } else{
            films = JSON.parse(localStorage.getItem("films")); // Array'e çevirme
        }
    
        return films;
    }
    
    static deleteFilmFromStorage (filmTitle) {
        let films = this.getFilmsFromStorage();
    
        films.forEach(function(film,index){
            if (film.title ===filmTitle) {
                films.splice(index,1);
            }
        });
    
        localStorage.setItem("films",JSON.stringify(films));
    }
    
    static clearAllFilmsFromStorage(){
        localStorage.removeItem ("films");
    }
}
