import { BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { View, Text } from 'react-native'
import { TextEdit } from '~components/TextEdit'

import { Container, ContainerData, ContainerModal } from './styles'
import { ModalArrastable } from '~components/ModalArrastable'

interface Props {
  refBottom: any
  openModalSearch: any
  visible: boolean
  setVisible?: any
}

export const ModalSearch = ({ refBottom, visible, setVisible }: Props) => {
  const snapPoints = useMemo(() => ['25%', '50%'], [])

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
  }, [])

  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />,
    []
  )

  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  return (
    <ModalArrastable
      visible={visible}
      setVisible={setVisible}
      data={{
        name: 'Search de carros',
      }}
    />
  )
}
