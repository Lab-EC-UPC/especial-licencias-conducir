import { Fragment } from 'react';
import { Transition } from '@headlessui/react';

interface CausaOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: string;
}

export const CausaOverlay = ({ isOpen, onClose, title, content }: CausaOverlayProps) => {
    return (
        <Transition show={isOpen} as={Fragment}>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-800/75">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <div className="bg-white rounded-xl shadow-2xl relative max-w-xl w-full max-h-[90vh] flex flex-col p-6 sm:p-8">
                        <div className="flex justify-end" style={{ marginBottom: '-36px', zIndex: 2 }}>
                            <button
                                onClick={onClose}
                                className="p-2 text-gray-500 hover:text-gray-900 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex justify-center items-center mb-4">
                            <h2 className="text-2xl font-bold text-[#131A31] ">{title}</h2>

                        </div>
                        <div className="overflow-y-auto">
                            <p className="text-sm font-medium text-gray-700 whitespace-pre-wrap">{content}</p>
                        </div>
                    </div>
                </Transition.Child>
            </div>
        </Transition>
    );
};