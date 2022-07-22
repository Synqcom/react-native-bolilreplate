import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-native';
import { Box } from 'app/config/global-styles';
import { Typography } from 'app/components/ui-components/Typography';
import { typographyStyles } from 'app/components/ui-components/Typography/styles';
import { BaseButton } from 'app/components/ui-components/buttons/BaseButton';
import { GlobalConstants } from 'app/config/global-constants';
import modalStyles from './styles';
import { clearNotification } from 'app/store/configureStore';

type TNotificationModalProps = {
  animationType?: string | any;
  successModalText?: string;
  cancelModalText?: string;
  modalHeader: string;
  modalText: string;
  modalVisible: boolean;
  onPress?: () => void;
};

const NotificationModal: FC<TNotificationModalProps> = ({
  animationType,
  successModalText,
  modalHeader,
  modalText,
  modalVisible,
  ...props
}) => {
  const dispatch = useDispatch();
  return (
    <Modal animationType={animationType} transparent={true} visible={modalVisible} {...props}>
      <Box style={modalStyles.centeredView}>
        <Box style={modalStyles.modalView}>
          <Typography style={[typographyStyles.medium, modalStyles.text]} text={modalHeader} />
          <Typography style={[typographyStyles.regular, modalStyles.text]} text={modalText} />
          <BaseButton
            labelStyle={{ color: GlobalConstants.color.COLOR_WHITE }}
            onPress={() => dispatch(clearNotification())}
            btnText={successModalText}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export { NotificationModal };
