import { Props as MainProps } from './pages/Main';
import { Props as PhotoDetailsProps } from './pages/PhotoDetails';

export type RootStackParamList = {
  Main: MainProps;
  PhotoDetails: PhotoDetailsProps;
};

export type Photo = {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
