import { SpaceGroteskBold } from '@/lib/utils';
import React from 'react';

const DataTransparency = () => {
    return (
        <section id='transparency' className='py-20 bg-black-100 text-white p-4'>
            <div className='max-w-4xl mx-auto border border-purple/30 rounded-3xl p-10 bg-gradient-to-br from-purple/10 to-transparent'>
                <h2 className={`${SpaceGroteskBold.className} text-3xl font-bold mb-6 text-center text-purple`}>
                    Google API Data Usage Transparency
                </h2>
                <div className='space-y-6 text-[#AEAEAE]'>
                    <p className='text-lg'>
                        MX Tech Solutions is committed to transparency and the security of your data. For certain automated workflows (such as our <strong>Doexcess</strong> platform), we request access to specific Google user data through Google APIs.
                    </p>
                    
                    <div>
                        <h3 className={`${SpaceGroteskBold.className} text-xl font-bold mb-2 text-white`}>
                            What data do we request?
                        </h3>
                        <p>
                            We request access to your <strong>Google Contacts</strong>. Specifically, we use the Google People API to manage contact information related to your business transactions.
                        </p>
                    </div>

                    <div>
                        <h3 className={`${SpaceGroteskBold.className} text-xl font-bold mb-2 text-white`}>
                            Why do we request this data?
                        </h3>
                        <p>
                            The primary purpose is to automate and streamline your customer management. When a payment is verified, our system can automatically create or update a contact in your Google account, ensuring your records are always up-to-date without manual entry.
                        </p>
                    </div>

                    <div>
                        <h3 className={`${SpaceGroteskBold.className} text-xl font-bold mb-2 text-white`}>
                            How is your data handled?
                        </h3>
                        <p>
                            We follow the <strong>Google API Services User Data Policy</strong>, including the Limited Use requirements. Your data is:
                        </p>
                        <ul className='list-disc ml-6 mt-2 space-y-1'>
                            <li>Only used to provide the specific automation services you have requested.</li>
                            <li>Never sold to third parties or used for advertising.</li>
                            <li>Protected by industry-standard encryption and security protocols.</li>
                        </ul>
                    </div>

                    <p className='text-sm italic mt-4'>
                        For more details, please review our <a href='/privacy' className='text-purple underline hover:text-white transition'>Privacy Policy</a> or contact our data protection team.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DataTransparency;
