import {Modal, ModalBody, ModalContent} from "@heroui/modal";

interface CausaOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: string;
}

export const CausaOverlay = ({ isOpen, onClose, title, content }: CausaOverlayProps) => {
    return (
      <Modal
        isOpen={isOpen}
        onOpenChange={onClose}
        size="2xl"
      >
        <ModalContent>
          {() => (
            <>
              <ModalBody>
                <div className="bg-white flex flex-col p-6 sm:p-8">
                  <div className="flex justify-center items-center mb-4">
                    <h2 className="text-2xl font-bold text-[#131A31] ">{title}</h2>

                  </div>
                  <div className="overflow-y-auto">
                    <p className="text-sm font-medium text-gray-700 whitespace-pre-wrap">{content}</p>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    );
};