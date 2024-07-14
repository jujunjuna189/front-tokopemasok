const HelpAdmin = () => {
    return (
        <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-green-50 rounded-s-full px-2 py-1 cursor-pointer" onClick={() => { }}>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z" /><path d="M15 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z" /><path d="M4 15v-3a8 8 0 0 1 16 0v3" /></svg>
                </span>
                <span className="text-[9px] font-semibold leading-3">Pusat <br />Bantuan</span>
            </div>
        </div>
    );
}

export default HelpAdmin;