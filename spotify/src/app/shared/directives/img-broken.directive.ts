import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  // Aplico el selector solo en elementos <img>
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  private imageReplaced: boolean = false;
  // Escuchar al host, en este caso el IMG
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;
    // Log para ver si el evento se dispara
    console.log('Imagen rota detectada, cambiando a imagen de reemplazo');
    // Solo reemplazar si aún no se ha reemplazado la imagen
    if (!this.imageReplaced) {
      elNative.src = 'https://github.com/rcontreras1337/spotify4tip/blob/Inicio_16082024/spotify/src/assets/images/notFound.webp'; // Ruta de imagen de reemplazo
      this.imageReplaced = true;  // Marca como reemplazada
      console.log('Imagen reemplazada por notFound.webp');
    }
  };

  constructor(private elHost: ElementRef) {

   }

}
