import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebook, FaXTwitter } from 'react-icons/fa6';
import { RiWhatsappFill } from 'react-icons/ri';

function SocialShare({ url, title }) {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    return (
        <>
            <div className="flex justify-center my-[3rem] gap-[2rem] text-[2.3rem]">
                <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebook className="text-[#316FF6]" />
                </a>
                <a
                    href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                      <FaXTwitter />
                </a>
                <RiWhatsappFill className="text-[#25D366]" />
                <a
                    href={`https://www.linkedin.com/shareArticle?url=${encodedUrl}&title=${encodedTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsLinkedin className="text-[#0762C8]" />
                </a>
            </div>
        </>
    );
}

export default SocialShare;
