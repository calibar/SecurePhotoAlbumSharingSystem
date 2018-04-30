/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global getAssetRegistry getFactory emit */
/**
 * Sample transaction processor function.
 * @param {org.mengxuanliu.valuesharing.SampleTransaction} tx The sample transaction instance.
 * @transaction
 */
/*async function sampleTransaction(tx) {  // eslint-disable-line no-unused-vars

    // Save the old value of the asset.
    const oldValue = tx.asset.value;

    // Update the asset with the new value.
    tx.asset.value = tx.newValue;

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.mengxuanliu.valuesharing.Album');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.asset);
  	console.log(tx.asset.value)
	/*console.log(tx.asset.value)*/
    // Emit an event for the modified asset.
   /* let event = getFactory().newEvent('org.mengxuanliu.valuesharing', 'SampleEvent');
    event.asset = tx.asset;
    event.oldValue = oldValue;
    event.newValue = tx.newValue;
    emit(event);
}*/

async function onChangeOwner(tx) {  // eslint-disable-line no-unused-vars

  // Save the old value of the asset.
  const oldOwner= tx.album.owner;

  // Update the asset with the new value.
  tx.album.owner = tx.newOwner;

  // Get the asset registry for the asset.
  const assetRegistry = await getAssetRegistry('org.mengxuanliu.valuesharing.Album');
  // Update the asset in the asset registry.
  await assetRegistry.update(tx.album);

  // Emit an event for the modified asset.
  let event = getFactory().newEvent('org.mengxuanliu.valuesharing', 'ChangeOwnerEvent');
  event.album = tx.album;
  event.oldOwner = oldOwner;
  event.newOwner = tx.newOwner;
  emit(event);
  throw new Error('onChangeOwner error happened')
}

async function onViewerReadAlbum(vra) {
var currentParticipant = getCurrentParticipant();
 const assetRegistry = await getAssetRegistry('org.mengxuanliu.valuesharing.Album');
  await assetRegistry.get(vra.album.albumId);
  let index = vra.album.viewer.findIndex(function(element){
    return element.viewer.getIdentifier()==currentParticipant.getIdentifier()})
  if(vra.album.viewer[index].counter>0){
    vra.album.viewer[index].counter--;
  }else{
    vra.album.viewer.splice(index,1);
  }
  await assetRegistry.update(vra.album);
    console.log('the index is',index)
    console.log('Album ',vra.album.albumId,'is:\n',vra.album.album)
    /*return vra.album.album,vra.album.viewer[index].counter*/
}

async function onOwnerAddViewer(oav){
const assetRegistry = await getAssetRegistry('org.mengxuanliu.valuesharing.Album');
await assetRegistry.get(oav.album.albumId);
console.log('before: ',oav.album.viewer.length);
console.log(oav.viewers.length);
let len=oav.viewers.length;
for(var i=0;i<len;i++){
  let index = oav.album.viewer.findIndex(function(element){
    return element.viewer.getIdentifier()==oav.viewers[i].viewer.getIdentifier()})
  console.log(index)
  if (index!=-1){
    console.log(oav.viewers[i].viewer.getIdentifier(),"has already in this album's viewer list. Do not allow to add the same viewer twice.")     
  }else{
    oav.album.viewer.push(oav.viewers[i])
  }
}
await assetRegistry.update(oav.album);
console.log('after: ',oav.album.viewer.length);

}

async function onOwnerAddPhotos(oap){
const assetRegistry = await getAssetRegistry('org.mengxuanliu.valuesharing.Album');
await assetRegistry.get(oap.album.albumId);
console.log('before: ',oap.album.album.length);
console.log(oap.photos.length);
let len=oap.photos.length;
for(var i=0;i<len;i++){
  let index = oap.album.album.findIndex(function(element){
    return element.photoName==oap.photos[i].photoName})
  console.log(index)
  if (index!=-1){
    console.log(oap.photos[i].photoName,"has already in this album. Change photo name to ",oap.photos[i].photoName+"'")
    oap.photos[i].photoName=oap.photos[i].photoName+"'"
  }
  oap.album.album.push(oap.photos[i])
}
await assetRegistry.update(oap.album);
console.log('after: ',oap.album.album.length);

}
