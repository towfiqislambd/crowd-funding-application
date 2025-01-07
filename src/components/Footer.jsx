const Footer = () => {
    return (
        <footer className="bg-neutral text-primary-content pt-14 pb-8">
            <div className="container mx-auto px-5">
                <div className="footer">
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <form>
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text text-gray-200">Enter your email address</span>
                            </label>
                            <div className="join">
                                <input type="text" placeholder="username@site.com" className="input input-bordered text-black join-item" />
                                <button className="btn bg-purple-600 hover:bg-purple-600 border-none text-white font-medium join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <hr className="my-5" />
                <p className="text-center text-gray-400">@copyright 2025. All Rights Reserved By <a href="https://www.facebook.com/towfiqislambd" className="text-amber-400 font-mono font-medium hover:underline" target="_blank">Towfiq Islam</a></p>
            </div>
        </footer>
    )
}

export default Footer;