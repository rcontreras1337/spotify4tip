import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  // Aplico el selector solo en elementos <img>
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  private imageReplaced: boolean = false;
  @Input() customImgIn: string = '';
  // Escuchar al host, en este caso el IMG
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;
    // Log para ver si el evento se dispara
    console.log('Imagen rota detectada, cambiando a imagen de reemplazo');
    // Solo reemplazar si aún no se ha reemplazado la imagen
    if (!this.imageReplaced) {
      elNative.src = this.customImgIn; // Ruta de imagen de reemplazo
      this.imageReplaced = true;  // Marca como reemplazada
      console.log('Imagen reemplazada por notFound.webp');
    }
  };

  constructor(private elHost: ElementRef) {

   }

}
