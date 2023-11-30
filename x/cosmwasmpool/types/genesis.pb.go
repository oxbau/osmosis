// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: osmosis/cosmwasmpool/v1beta1/genesis.proto

package types

import (
	fmt "fmt"
	_ "github.com/cosmos/cosmos-proto"
	types "github.com/cosmos/cosmos-sdk/codec/types"
	_ "github.com/cosmos/cosmos-sdk/types"
	_ "github.com/cosmos/gogoproto/gogoproto"
	proto "github.com/cosmos/gogoproto/proto"
	_ "google.golang.org/protobuf/types/known/durationpb"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// GenesisState defines the cosmwasmpool module's genesis state.
type GenesisState struct {
	// params is the container of cosmwasmpool parameters.
	Params Params       `protobuf:"bytes,1,opt,name=params,proto3" json:"params"`
	Pools  []*types.Any `protobuf:"bytes,2,rep,name=pools,proto3" json:"pools,omitempty"`
}

func (m *GenesisState) Reset()         { *m = GenesisState{} }
func (m *GenesisState) String() string { return proto.CompactTextString(m) }
func (*GenesisState) ProtoMessage()    {}
func (*GenesisState) Descriptor() ([]byte, []int) {
	return fileDescriptor_8fd7fc7fdf8fd2f4, []int{0}
}
func (m *GenesisState) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *GenesisState) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_GenesisState.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *GenesisState) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GenesisState.Merge(m, src)
}
func (m *GenesisState) XXX_Size() int {
	return m.Size()
}
func (m *GenesisState) XXX_DiscardUnknown() {
	xxx_messageInfo_GenesisState.DiscardUnknown(m)
}

var xxx_messageInfo_GenesisState proto.InternalMessageInfo

func (m *GenesisState) GetParams() Params {
	if m != nil {
		return m.Params
	}
	return Params{}
}

func (m *GenesisState) GetPools() []*types.Any {
	if m != nil {
		return m.Pools
	}
	return nil
}

func init() {
	proto.RegisterType((*GenesisState)(nil), "osmosis.cosmwasmpool.v1beta1.GenesisState")
}

func init() {
	proto.RegisterFile("osmosis/cosmwasmpool/v1beta1/genesis.proto", fileDescriptor_8fd7fc7fdf8fd2f4)
}

var fileDescriptor_8fd7fc7fdf8fd2f4 = []byte{
	// 306 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x8f, 0x31, 0x4e, 0xc3, 0x30,
	0x14, 0x86, 0x63, 0xa0, 0x95, 0x48, 0x99, 0xaa, 0x0e, 0xa5, 0x42, 0xa6, 0x42, 0x0c, 0x05, 0xa9,
	0xb6, 0x1a, 0x84, 0xc4, 0x4a, 0x16, 0xc4, 0x56, 0x85, 0x8d, 0x05, 0xd9, 0xc1, 0x98, 0x48, 0x49,
	0x5e, 0x14, 0x3b, 0x85, 0x1c, 0x81, 0x8d, 0xc3, 0x70, 0x88, 0x8a, 0xa9, 0x23, 0x13, 0x42, 0xc9,
	0x45, 0x50, 0x63, 0x07, 0x01, 0x43, 0x37, 0x3f, 0xfd, 0xdf, 0xef, 0xf7, 0x3e, 0xf7, 0x14, 0x54,
	0x02, 0x2a, 0x52, 0x34, 0x04, 0x95, 0x3c, 0x31, 0x95, 0x64, 0x00, 0x31, 0x5d, 0xcc, 0xb8, 0xd0,
	0x6c, 0x46, 0xa5, 0x48, 0x85, 0x8a, 0x14, 0xc9, 0x72, 0xd0, 0xd0, 0x3f, 0xb0, 0x2c, 0xf9, 0xcd,
	0x12, 0xcb, 0x8e, 0x06, 0x12, 0x24, 0x34, 0x20, 0x5d, 0xbf, 0x4c, 0x67, 0xb4, 0x2f, 0x01, 0x64,
	0x2c, 0x68, 0x33, 0xf1, 0xe2, 0x81, 0xb2, 0xb4, 0x6c, 0xa3, 0xb0, 0xf9, 0xef, 0xce, 0x74, 0xcc,
	0x60, 0x23, 0xfc, 0xbf, 0x75, 0x5f, 0xe4, 0x4c, 0x47, 0x90, 0xb6, 0xb9, 0xa1, 0x29, 0x67, 0x4a,
	0xfc, 0x1c, 0x1b, 0x42, 0xd4, 0xe6, 0x27, 0x1b, 0xad, 0x32, 0x96, 0xb3, 0xc4, 0xae, 0x3a, 0x7a,
	0x41, 0xee, 0xde, 0x95, 0xd1, 0xbc, 0xd1, 0x4c, 0x8b, 0xbe, 0xef, 0x76, 0x0d, 0x30, 0x44, 0x63,
	0x34, 0xe9, 0x79, 0xc7, 0x64, 0x93, 0x36, 0x99, 0x37, 0xac, 0xbf, 0xb3, 0xfc, 0x3c, 0x74, 0x02,
	0xdb, 0xec, 0x9f, 0xbb, 0x9d, 0x35, 0xa4, 0x86, 0x5b, 0xe3, 0xed, 0x49, 0xcf, 0x1b, 0x10, 0xe3,
	0x43, 0x5a, 0x1f, 0x72, 0x99, 0x96, 0xfe, 0xee, 0xfb, 0xdb, 0xb4, 0x33, 0x07, 0x88, 0xaf, 0x03,
	0x43, 0xfb, 0xc1, 0xb2, 0xc2, 0x68, 0x55, 0x61, 0xf4, 0x55, 0x61, 0xf4, 0x5a, 0x63, 0x67, 0x55,
	0x63, 0xe7, 0xa3, 0xc6, 0xce, 0xed, 0x85, 0x8c, 0xf4, 0x63, 0xc1, 0x49, 0x08, 0x09, 0xb5, 0xe7,
	0x4c, 0x63, 0xc6, 0x55, 0x3b, 0xd0, 0x85, 0x37, 0xa3, 0xcf, 0x7f, 0x75, 0x75, 0x99, 0x09, 0xc5,
	0xbb, 0xcd, 0xce, 0xb3, 0xef, 0x00, 0x00, 0x00, 0xff, 0xff, 0x12, 0xf0, 0xda, 0xee, 0xe9, 0x01,
	0x00, 0x00,
}

func (m *GenesisState) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *GenesisState) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *GenesisState) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Pools) > 0 {
		for iNdEx := len(m.Pools) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Pools[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x12
		}
	}
	{
		size, err := m.Params.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintGenesis(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintGenesis(dAtA []byte, offset int, v uint64) int {
	offset -= sovGenesis(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *GenesisState) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Params.Size()
	n += 1 + l + sovGenesis(uint64(l))
	if len(m.Pools) > 0 {
		for _, e := range m.Pools {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	return n
}

func sovGenesis(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozGenesis(x uint64) (n int) {
	return sovGenesis(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *GenesisState) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowGenesis
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: GenesisState: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: GenesisState: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Params", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Params.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pools", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Pools = append(m.Pools, &types.Any{})
			if err := m.Pools[len(m.Pools)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipGenesis(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthGenesis
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipGenesis(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowGenesis
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthGenesis
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupGenesis
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthGenesis
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthGenesis        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowGenesis          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupGenesis = fmt.Errorf("proto: unexpected end of group")
)
