import { BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { Button } from '~components'
import { useTheme } from '~hooks'
import { Container, ContainerModal } from './styles'

interface Props {
  visible: boolean
  setVisible?: any
  data?: any
}

export const ModalArrastable = ({ visible, setVisible, data }: Props) => {
  const snapPoints = useMemo(() => ['25%', '50%'], [])
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
  }, [])

  const renderBackdrop = useCallback(
    (props: any) => {
      setVisible(false)
      return <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />
    },

    []
  )

  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  const openModal = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [bottomSheetModalRef.current, visible])

  if (visible) {
    openModal()
  }

  const closeModal = useCallback(() => {
    bottomSheetModalRef?.current?.dismiss()
  }, [])

  return (
    <Container>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
      >
        <TouchableOpacity onPress={closeModal}>
          <View
            style={{
              marginLeft: 'auto',
              paddingRight: 20,
            }}
          >
            <Ionicons name="close" size={30} />
          </View>
        </TouchableOpacity>
        <ContainerModal>
          <Text>{data?.name}</Text>
        </ContainerModal>
      </BottomSheetModal>
    </Container>
  )
}
