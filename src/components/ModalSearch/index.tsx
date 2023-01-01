import { BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { View, Text } from 'react-native'
import { TextEdit } from '~components/TextEdit'

import { Container, ContainerData, ContainerModal } from './styles'

interface Props {
  refBottom: any
  openModalSearch: any
}

export const ModalSearch = ({ refBottom }: Props) => {
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
    <BottomSheetModal
      ref={(ref) => {
        refBottom.current = ref
      }}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
    >
      <ContainerData>
        <TextEdit>Search</TextEdit>
      </ContainerData>
    </BottomSheetModal>
  )
}
