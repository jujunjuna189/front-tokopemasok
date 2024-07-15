import { Content, NavbarSimple } from "../../components";
import { UseProfileContext } from "../../contexts/profile";

const ProfilePage = () => {
    const { user, onLogout } = UseProfileContext();
    return (
        <Content padding={false} navbar={false}>
            <NavbarSimple title={"Biodata"} />
            <div className="px-4">
                <div className="flex gap-3 mt-2 items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
                    </span>
                    <div className="flex flex-col">
                        <span className="font-semibold text-[16px]">{user.user.name}</span>
                        <span>{user.user.email}</span>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="border rounded-lg py-2 px-3 flex justify-between items-center cursor-pointer">
                        <div className="flex gap-2 items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13.252 20.601c-.408 .155 -.826 .288 -1.252 .399a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.19 7.357" /><path d="M22 22l-5 -5" /><path d="M17 22l5 -5" /></svg>
                            </span>
                            <span className="font-semibold">Hapus Akun</span>
                        </div>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                        </span>
                    </div>
                    <div className="border rounded-lg py-2 px-3 flex justify-between items-center mt-1 cursor-pointer" onClick={() => onLogout()}>
                        <div className="flex gap-2 items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" /></svg>
                            </span>
                            <span className="font-semibold">Keluar Akun</span>
                        </div>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                        </span>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default ProfilePage;