import React from 'react';

const ProfileHeader = () => {
    const user = 'user';
    console.log(user);
    console.log(user);
    return (
        <div>
            <div>
                <img
                    src="https://instagram.fcgp17-1.fna.fbcdn.net/v/t51.2885-19/s150x150/116131411_571352116869747_4668565511165958980_n.jpg?_nc_ht=instagram.fcgp17-1.fna.fbcdn.net&_nc_ohc=2wsK9jaXAyAAX9TWahq&tn=eW9bur6BCHaDAgLD&edm=ABfd0MgBAAAA&ccb=7-4&oh=d7a195b0a7d4b3b87f42550d44e83e22&oe=61379622&_nc_sid=7bff83"
                    alt="profile"
                />
            </div>
            <div>
                <div>
                    <h1>habib54562</h1>
                    <button type="button" className="py-3 px-4 border rounded">
                        edit profile
                    </button>
                    <button type="button" className="py-3 px-3 border rounded">
                        icon
                    </button>
                </div>
                <div>
                    <h1>0 Post</h1>
                    <h1> 0 Followers</h1>
                    <h1>0 Following</h1>
                </div>
                <div>
                    <h1>Full Name</h1>
                    <h1>userurllink.com</h1>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
