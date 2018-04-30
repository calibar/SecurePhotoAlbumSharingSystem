import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.mengxuanliu.valuesharing{
   export class viewer {
      viewer: SampleParticipant;
      counter: number;
   }
   export class SampleAsset extends Asset {
      assetId: string;
      owner: SampleParticipant;
      value: string;
      viewer: viewer[];
   }
   export class SampleParticipant extends Participant {
      participantId: string;
      firstName: string;
      lastName: string;
   }
   export class SampleTransaction extends Transaction {
      asset: SampleAsset;
      newValue: string;
   }
   export class SampleEvent extends Event {
      asset: SampleAsset;
      oldValue: string;
      newValue: string;
   }
   export class ChangeOwner extends Transaction {
      asset: SampleAsset;
      newOwner: SampleParticipant;
   }
   export class ChangeOwnerEvent extends Event {
      asset: SampleAsset;
      oldOwner: SampleParticipant;
      newOwner: SampleParticipant;
   }
   export class ViewerReadAsset extends Transaction {
      AssetViewer: SampleParticipant;
      asset: SampleAsset;
   }
   export class ViewerReadAssetEvent extends Event {
      AssetViewer: SampleParticipant;
      asset: SampleAsset;
   }
// }
