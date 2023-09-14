const tg = window.Telegram.WebApp



const name = tg.initDataUnsafe?.user?.username;

const onClose = () => {
	tg.close()
};
const onToggleButton = () => {
	if(tg.MainButton.isVisible){
		tg.MainButton.hide()
	}
	else tg.MainButton.show()

}
export function useTelegram(){
	return({
		tg,
		onToggleButton,
		onClose,
		name,
		query_id: tg.initDataUnsafe?.query_id

	})
}
