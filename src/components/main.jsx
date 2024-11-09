export default function Main() {
    return (
        <div className="main">
            <form>
                <div className="first__div">
                    <div className="main__name" ><h3>Full Name</h3><input className="input_area" type="text" placeholder="John Doe"/></div>
                    <div className="main__title" ><h3>Job Title</h3><input className="input_area" type="text" placeholder="Principle Software Engineer"/></div>
                </div>
                <div className="second__div">
                    <div className="main__email" ><h3>email</h3><input className="input_area" type="text" placeholder="johndoe@xyz.com"/></div>
                    <div className="main__phone" ><h3>Phone</h3><input className="input_area" type="text" placeholder="944 704 8000"/></div>
                </div>
                
                <div className="third__div">
                    <div className="main__address" ><h3>Address</h3><input className="input_area3" type="text" placeholder="Blue Island, Metaverse"/></div>
                </div>
                <div className="fourth__div">
                    <div className="main__summary" ><h3>Summary</h3><textarea className="text_area" type="text" placeholder="As principle engineer, i did this and that... and that"/></div>
                </div>
                
            </form>
        </div>
    )}