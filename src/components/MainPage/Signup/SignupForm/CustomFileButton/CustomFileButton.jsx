import custom_button from "./CustomFileButton.module.css";

const CustomFileButton = (props) => {
    return (
        <div className={custom_button.custom_file_upload}>
            <input id={'actual-upload-photo'}
                   type={'file'}
                   name={'photo'}
                   onChange={(event) => {
                       props.setFieldValue("photo", event.currentTarget.files[0]);
                   }}/>
            <label className={custom_button.custom_upload_button} htmlFor={'actual-upload-photo'}>Upload
            </label>
            <span className={custom_button.file_chosen}
                  id="file-chosen">{props.values.photo ? props.values.photo.name : 'Upload your photo'}</span>
        </div>
    )
}

export default CustomFileButton;