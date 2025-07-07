import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  CircularProgress,
  Link,
  IconButton
} from '@mui/material';
import { Close, OpenInNew, CheckCircle } from '@mui/icons-material';

interface TransactionLoadingModalProps {
  open: boolean;
  onClose: () => void;
  txHash?: string;
  isPending: boolean;
  isConfirming: boolean;
  isConfirmed: boolean;
}

const ChainLoadingModal: React.FC<TransactionLoadingModalProps> = ({
  open,
  onClose,
  txHash,
  isPending,
  isConfirming,
  isConfirmed
}) => {
  const getStatus = () => {
    if (isPending) return { text: '交易发送中...', color: 'primary' };
    if (isConfirming) return { text: '等待确认中...', color: 'warning' };
    if (isConfirmed) return { text: '交易已确认', color: 'success' };
    return { text: '准备发送交易', color: 'primary' };
  };

  const status = getStatus();

  const handleViewOnEtherscan = () => {
    if (txHash) {
      window.open(`https://sepolia.etherscan.io/tx/${txHash}`, '_blank');
    } else {
      window.open('https://sepolia.etherscan.io/', '_blank');
    }
  };

  return (
    <Dialog
      open={open}
      onClose={isConfirmed ? onClose : undefined}
      maxWidth="sm"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: 3,
          padding: 1
        }
      }}
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 1 }}>
        <Typography variant="h6" component="div">
          交易处理中
        </Typography>
        <IconButton
          aria-label="关闭"
          onClick={onClose}
          size="small"
          sx={{ color: 'grey.500' }}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ textAlign: 'center', py: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
          {/* 状态图标和加载动画 */}
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            {isConfirmed ? (
              <CheckCircle 
                sx={{ 
                  fontSize: 60, 
                  color: 'success.main',
                  animation: 'fadeIn 0.5s ease-in'
                }} 
              />
            ) : (
              <CircularProgress 
                size={60} 
                color={status.color as any}
                thickness={4}
              />
            )}
          </Box>

          {/* 状态文字 */}
          <Typography 
            variant="h6" 
            color={`${status.color}.main`}
            sx={{ fontWeight: 500 }}
          >
            {status.text}
          </Typography>

          {/* 交易哈希显示 */}
          {txHash && (
            <Box sx={{ width: '100%' }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                交易哈希:
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  wordBreak: 'break-all',
                  backgroundColor: 'grey.100',
                  padding: 1,
                  borderRadius: 1,
                  fontFamily: 'monospace'
                }}
              >
                {txHash}
              </Typography>
            </Box>
          )}
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'space-between', px: 3, pb: 2 }}>
        <Button
          variant="outlined"
          startIcon={<OpenInNew />}
          onClick={handleViewOnEtherscan}
          size="small"
        >
          查看区块链浏览器
        </Button>
        
        {isConfirmed && (
          <Button
            variant="contained"
            onClick={onClose}
            color="success"
          >
            完成
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ChainLoadingModal;