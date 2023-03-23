import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-box-file',
  templateUrl: 'box-file.component.html',
  styleUrls: ['box-file.component.sass']
})
export class BoxFileComponent implements OnInit{
  files: any[] = []
  hover: boolean = false
  indexHover: number = 0
  @Output() fileList: EventEmitter<any> = new EventEmitter();
  @Input() allowedFormats: string[] = ['.png','.jpg','.jpeg'];

  @Input() options: {
    multi: boolean,
    highlightedMode: boolean
  } = {
    multi: true,
    highlightedMode: true
  }

  dropHandler(ev:any) {
    ev.preventDefault();
    if (ev.dataTransfer.items && this.options.multi)
      [...ev.dataTransfer.items].forEach((item, i) => {
        if (item.kind === 'file') {
          const file = item.getAsFile();
          this.checkExtension(file.name) ?
          this.files.push({...file, src: this.returnSrc(file), highlighted: false}) : console.error('Formato inválido: Extensão não permitida')
        }
      });
    else if(ev.dataTransfer.items && !this.options.multi){
      let file = ev.dataTransfer.items[0].getAsFile()
      this.checkExtension(file.name) ?
      this.files[0] = ({...file, src: this.returnSrc(file), highlighted: true}) : console.error('Formato inválido: Extensão não permitida')
    }
    else
      console.error('Não é um arquivo')
    this.emitFileList()
  }

  dragOverHandler(ev:any) {
    ev.preventDefault();
  }

  returnSrc(file: File){
   return URL.createObjectURL(file)
  }

  deleteFile(index: number){
    this.files.splice(index,1)
    this.emitFileList()
  }

  checkExtension(filename:string){
   let extension = filename.slice(filename.lastIndexOf('.'));
  return this.allowedFormats.includes(extension) ?  true : false
  }

  emitFileList(){
    this.fileList.emit(this.files)
  }

  changeInput(input: HTMLInputElement){
    input.click()
    input.onchange = (ev:any) => {
      let files = input.files as FileList
      Array.from(files).forEach(file => {
        this.checkExtension(file.name) ?
        this.files.push({file, src: this.returnSrc(file), highlighted: false})  : console.error('Formato inválido: Extensão não permitida')
      })
      this.emitFileList()
    }
  }

  ngOnInit(): void {}

  setHighlighted(index: number){
    if(this.options.highlightedMode){
      this.files.forEach(file => file.highlighted = false)
      this.files[index].highlighted = true
      this.emitFileList()
    }
  }
}
