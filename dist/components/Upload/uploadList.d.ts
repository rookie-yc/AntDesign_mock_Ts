import { FC } from 'react';
import { UploadFile } from './upload';
import './_style.scss';
interface UploadListProps {
    fileList: UploadFile[];
    onRemove: (_file: UploadFile) => void;
}
export declare const UploadList: FC<UploadListProps>;
export default UploadList;
