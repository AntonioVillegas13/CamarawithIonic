import { Injectable } from '@angular/core';
import { Camera,
   CameraResultType,
    CameraSource, 
    Photo } from '@capacitor/camera';


    
import { Filesystem,
   Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';




@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  
    public photos: UserPhoto[] = [];
  
    // other code
 
  constructor() { }

  public async addNewToGallery() {


    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
      width:10,
      height:10,
      promptLabelPhoto:"todo  good",
      promptLabelPicture:"promptLabelPicture",
      promptLabelHeader: "promptLabelHeader",
      presentationStyle:'fullscreen'
    });
  
    this.photos.push({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    });
  }
  
}



export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}