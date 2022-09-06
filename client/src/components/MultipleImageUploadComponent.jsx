import React, { Component } from 'react';

export default class MultipleImageUploadComponent extends Component {
//   const [ ] = useState(null);
    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props)
        this.state = {
            file: [null]
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }

    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        console.log('log e.target.files here', e.target.files);
        for (let i = 0; i < this.fileObj.length; i++) {
            this.setState({ file: this.fileArray.push(URL.createObjectURL(this.fileObj[i][0])) });
        }
    }

    uploadFiles(e) {
        e.preventDefault()
        console.log(this.state.file)
    }

    render() {
        return (
            <form>
                <div className="form-group multi-preview">
                    {this.fileArray.map((url, i)=> (
                        <img key={i} src={url} width={"50px"} alt="..." />
                    ))}
                </div>

                <div className="form-group">
                    <input type="file" className="form-control" onChange={(e)=> this.uploadMultipleFiles(e)} />
                </div>
                <button type="button" className="btn btn-danger btn-block" onClick={this.uploadFiles}>Upload</button>
            </form >
        )
    }
}
